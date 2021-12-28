import NavIcon from "./navigation/NavIcon";
import Navigation from "./navigation";

export default function MobileHeader({ display, setDisplay }) {
  return (
    <>
      <header className="mobile-header">
        <div
          className="mobile-logo"
          style={{
            backgroundImage:
              "url(https://2012.buildconf.com/images/logo-knockout@2x.png)",
          }}
        />
        <NavIcon handleClick={setDisplay} display={display} />
      </header>
      <Navigation display={display} />
    </>
  );
}
