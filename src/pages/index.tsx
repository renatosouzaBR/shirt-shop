import { styled } from "@/styles/stitches.config"

const Button = styled('button', {
  backgroundColor: '$green',
  border: 0,
  borderRadius: 4,
  padding: '12px 16px',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8
  }
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}