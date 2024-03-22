export default function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="items-center py-5 border-t">
      <div className="flex max-w-6xl mx-auto justify-between">
        <p>© {thisYear} PIARY Co.Ltd｜All rights reserved.</p>
        <p>
          Created with ❤️
        </p>
      </div>
    </footer>
  );
}
