export default function Disclaimer() {
  return (
    <div className="bg-transparent px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-800">
        <p className="text-base font-semibold leading-7 text-red-600">
          Important
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Financial Disclaimer
        </h1>
        <p className="mt-6 text-xl leading-8">
          The content provided on Asset Atlus is for informational and
          educational purposes only and should not be construed as professional
          financial advice. While the information is periodically updated, there
          may be some inaccuracies due to changes in market conditions,
          legislation, or other factors.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Asset Atlus is not a financial advisory firm, and the content
            provided herein is not intended to direct you to buy or sell any
            kind of financial instrument or to adopt a specific investment
            strategy. Any decisions made based upon the information provided on
            this site are the sole responsibility of the user, and in exchange
            for using Asset Atlus, you agree not to hold Asset Atlus, its
            affiliates, or any third party service provider liable for any
            possible claim for damages arising from any decision you make based
            on the information made available to you through this site.
          </p>
          <p className="mt-8">
            Before making any financial decision, we strongly recommend
            consulting with a qualified professional advisor to understand the
            risks and rewards associated with investing and to ensure that your
            actions are consistent with your personal financial situation and
            goals. Investing in financial markets involves a risk of loss, and
            there is no guarantee that any investment strategy will be
            profitable. Do not invest money that you cannot afford to lose.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">
            By using Asset Atlus, you acknowledge and agree to this
            disclaimer. If you do not agree with these terms, you are advised
            not to use this site.
          </h2>
        </div>
      </div>
    </div>
  );
}
