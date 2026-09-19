const questions = [
  { question: "A Aloe atende condomínios pequenos?", answer: "Sim. Há planos para condomínios de até 16 unidades, com serviços administrativos essenciais e opções de limpeza e manutenção conforme a modalidade contratada." },
  { question: "Como funciona a troca de administradora?", answer: "A equipe começa por um diagnóstico, organiza documentos, acessos, contratos e pendências, e acompanha a passagem para a nova rotina administrativa." },
  { question: "Os planos incluem síndico profissional?", answer: "O síndico profissional é um serviço complementar. A composição e o escopo são definidos na proposta para o condomínio." },
  { question: "Como recebo uma proposta?", answer: "Informe os dados básicos do condomínio no formulário. Uma mensagem preparada abrirá no WhatsApp; confira as informações e confirme o envio para iniciar a conversa." }
];

export function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }) }} />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div><p className="eyebrow">Dúvidas frequentes</p><h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">Antes de conversar, algumas respostas.</h2></div>
        <div className="border-t border-moss/20">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-moss/20 py-5">
              <summary className="focus-ring cursor-pointer list-none pr-8 text-lg font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">{question}<span aria-hidden="true" className="float-right text-bronze group-open:rotate-45">+</span></summary>
              <p className="max-w-2xl pt-4 leading-7 text-graphite/75">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
