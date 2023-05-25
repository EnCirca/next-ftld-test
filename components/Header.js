import Menu from '@components/Menu'

export default function Header({ title }) {
  return (
    <div>
      <Menu />
      <h1 className="title">{title}</h1>
    </div>
)}
