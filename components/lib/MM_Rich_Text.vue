<template>
	<v-container class="container--fluid pa-0">
		<v-row>
			<v-col class="offset-1 col-10 blue-grey darken-4">
				<v-expansion-panels inset>
					<v-expansion-panel>
						<v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
						<v-expansion-panel-content class="pt-4 mm-rich-text">
							<editor v-model="current_value" :init="editorInit" @input="onEdit" />
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/models/dom'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/code'
import 'tinymce/skins/ui/oxide/skin.min.css'
import Editor from '@tinymce/tinymce-vue'

function decodeEscapedMarkup(html) {
	if (!html || typeof html !== 'string') return html || ''
	if (!/&lt;\s*(?:div|table|thead|tbody|tr)\b/i.test(html)) return html
	if (typeof document === 'undefined') {
		return html
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'")
			.replace(/&amp;/g, '&')
	}
	const el = document.createElement('textarea')
	el.innerHTML = html
	return el.value
}

export default {
	name: 'MM_Rich_Text',
	components: {
		editor: Editor
	},
	props: ['value', 'title', 'action', 'action_key'],
	data() {
		return {
			current_value: decodeEscapedMarkup(this.value || ''),
			editorInit: {
				height: 520,
				menubar: 'edit insert format table',
				plugins: 'table lists link image code',
				toolbar:
					'undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | table | link | code',
				branding: false,
				promotion: false,
				convert_urls: false,
				relative_urls: false,
				entity_encoding: 'raw',
				verify_html: false,
				valid_elements: '*[*]',
				extended_valid_elements: '*[*]',
				skin: false,
				content_css: false,
				content_style:
					'html{color-scheme:light}body{font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#111!important;background:#fff!important;-webkit-text-fill-color:#111}p,li,td,th,span,div,h1,h2,h3,h4,h5,h6{color:#111!important;-webkit-text-fill-color:#111}a{color:#1565c0!important;-webkit-text-fill-color:#1565c0}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;vertical-align:top}th{background:#f3f3f3;font-weight:700}',
				table_default_styles: {
					'border-collapse': 'collapse',
					width: '100%'
				},
				table_resize_bars: true,
				zindex: 2000,
				setup(editor) {
					editor.on('init', () => {
						if (editor.iframeElement) {
							editor.iframeElement.style.colorScheme = 'light'
							editor.iframeElement.style.background = '#fff'
						}
						const doc = editor.getDoc()
						if (!doc) return
						doc.documentElement.style.setProperty('color-scheme', 'light')
						doc.body.style.setProperty('color', '#111', 'important')
						doc.body.style.setProperty('background', '#fff', 'important')
						doc.body.style.setProperty('-webkit-text-fill-color', '#111')
					})
				}
			}
		}
	},
	watch: {
		value(val) {
			const next = decodeEscapedMarkup(val || '')
			if (next !== this.current_value) {
				this.current_value = next
			}
		}
	},
	methods: {
		onEdit(html) {
			this.$store.dispatch(this.action, {
				key: this.action_key,
				value: typeof html === 'string' ? html : this.current_value
			})
		}
	}
}
</script>

<style>
.mm-rich-text .tox-tinymce {
	border-radius: 4px;
}

.mm-rich-text .tox-editor-header,
.mm-rich-text .tox .tox-toolbar,
.mm-rich-text .tox .tox-toolbar__primary,
.mm-rich-text .tox .tox-menubar {
	background: #fff;
	color: #111;
}

.mm-rich-text .tox-edit-area,
.mm-rich-text .tox-edit-area__iframe,
.mm-rich-text iframe,
.mm-rich-text .mce-content-body {
	color: #111 !important;
	background: #fff !important;
	color-scheme: light;
}
</style>
