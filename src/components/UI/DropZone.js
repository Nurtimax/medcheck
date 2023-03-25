import { useDropzone } from 'react-dropzone'

const DropzoneWithFileReader = ({ children, setFile }) => {
   const handleUpload = (acceptedFiles) => {
      const file = acceptedFiles[0]
      const reader = new FileReader()

      reader.onload = () => {
         setFile('expertImage', reader.result)
      }
      reader.readAsDataURL(file)
   }
   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleUpload,
      accept: {
         'image/png': [],
         'image/jpeg': [],
         'image/jpg': [],
      },
   })
   return (
      <div {...getRootProps()}>
         <input {...getInputProps()} />
         <p>{children}</p>
      </div>
   )
}
export default DropzoneWithFileReader
