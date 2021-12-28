import NavIcon from "./navigation/NavIcon";
import Navigation from "./navigation";

export default function MobileHeader({ display, setDisplay }) {
  return (
    <>
      <header className="flex w-full h-[48px] bg-my-black justify-between md:hidden">
        <div
          className="w-[44px] h-[44px] mb-auto mt-[1px] ml-[4px] bg-[length:238px_90px] bg-center"
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
