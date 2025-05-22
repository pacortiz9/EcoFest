export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} EcoFest. Todos los derechos reservados.
      </div>
    </footer>
  );
}