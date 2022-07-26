import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/">Home</NavLink> * <NavLink to="list">List</NavLink> *{' '}
      <NavLink to="about">About</NavLink> *{' '}
      <NavLink to="pokedex">Pokemon Pokedex</NavLink>
      <NavLink to="participants-workshops">Workshops</NavLink>
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
