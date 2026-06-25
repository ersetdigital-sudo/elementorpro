export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide main site header, footer, and floating WA button */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header, body > footer, body > a[aria-label="Hubungi via WhatsApp"], body > main { display: none !important; }
          `,
        }}
      />
      <div className="fixed inset-0 z-[9999] overflow-auto bg-[#080b12] text-white">
        {children}
      </div>
    </>
  );
}
