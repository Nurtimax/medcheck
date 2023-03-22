import { ReactComponent as BoldLetter } from './../../assets/icons/bold-letter.svg'
import { ReactComponent as ItalicLetter } from './../../assets/icons/italic-letter.svg'
import { ReactComponent as UnderlineLetter } from './../../assets/icons/underline-letter.svg'
import { ReactComponent as ListUl } from './../../assets/icons/list-ul.svg'
import { ReactComponent as ListOl } from './../../assets/icons/list-ol.svg'
import { styled } from '@mui/material'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

const MenuBar = ({ editor }) => {
   if (!editor) {
      return null
   }
   return (
      <MenuBarStyled>
         <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active ' : 'btn'}
         >
            <BoldLetter />
         </button>
         <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : 'btn'}
         >
            <ItalicLetter />
         </button>
         <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : 'btn'}
         >
            <UnderlineLetter />
         </button>

         <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : 'btn'}
         >
            <ListUl />
         </button>
         <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : 'btn'}
         >
            <ListOl />
         </button>
      </MenuBarStyled>
   )
}

const TextEditor = ({ onChange }) => {
   const editor = useEditor({
      extensions: [StarterKit, Underline],
      content: '',
      onUpdate: ({ editor }) => {
         const html = editor.getHTML()
         onChange(html)
      },
   })
   return (
      <TextEditorContainer>
         <p>Описание</p>
         <Container>
            <MenuBar editor={editor} />
            <EditorContentStyle editor={editor} />
         </Container>
      </TextEditorContainer>
   )
}
export default TextEditor

const MenuBarStyled = styled('main')(() => ({
   height: '70px',
   display: 'flex',
   alignItems: 'center',
   borderBottom: '1px solid #D9D9D9',
   gap: '96px',
   paddingLeft: '60px',

   '.btn': {
      width: '14px',
      height: '19px',
      background: ' none',
      border: 'none',
      cursor: 'pointer',
   },
   '.is-active': {
      background: 'rgb(197 197 197)',
      height: '30px',
      width: '30px',
      display: 'flex',
      alignItems: 'center',
   },
}))

const TextEditorContainer = styled('div')(() => ({
   p: {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#4D4E51',
      marginBottom: '4px',
   },
}))

const Container = styled('div')(() => ({
   width: '100%',
   height: '100%',
   border: '1px solid #D9D9D9',
   borderRadius: '4px',
}))

const EditorContentStyle = styled(EditorContent)(() => ({
   '& .ProseMirror.ProseMirror-focused': {
      outline: 'none',
   },
}))
