import Button from '../../../../../reusables-ui/Button'
import SuccessMessage from "./SuccessMessage";

export default function SubmitButton({ isSubmited }: { isSubmited: boolean }) {
  return (
    <>
        <Button
            label="Ajouter un nouveau produit au menu"
            version="success"
            size="slim"
        />
        { isSubmited && <SuccessMessage/> }
    </>
  )
}
