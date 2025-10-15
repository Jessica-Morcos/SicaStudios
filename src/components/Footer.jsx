export default function Footer() {
  return (
    <footer className="w-full landscape:mt-[10rem] text-center py-[1rem] ">
      <p className="text-sm text-gray-600 tracking-wide">
        © {new Date().getFullYear()} Jessica Morcos
      </p>
    </footer>
  );
}
