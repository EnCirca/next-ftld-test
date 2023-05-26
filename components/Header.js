import Menu from '@components/Menu'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header({ title }) {
  return (
    <div>
      <Menu />
      <h1 className="title">{title}</h1>
    </div>
)}
