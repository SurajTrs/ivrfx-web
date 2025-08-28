export default function Section8TradingExample() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        {/* Image left */}
        <div className="col-lg-6">
          <div
            className="ratio ratio-1x1 rounded-circle border"
            style={{ borderColor: "#e9d5ff", background: "#faf5ff" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-muted">Image</span>
            </div>
          </div>
        </div>

        {/* Text right */}
        <div className="col-lg-6">
          <h2 className="display-6 fw-bold mb-3">Trading example</h2>
          <p className="text-muted fs-5">
            With a WTI CFD, you would be trading on the price movements of a minimum of 10 units of WTI oil (i.e., ten barrels). If the oil price is $60 per barrel, your exposure would be $600 (10 x 60).
          </p>
          <p className="text-muted fs-5">
            In this example, the oil futures trade work on 10% leverage as standard, so your initial margin would be $60 (10% of $600).
          </p>
          <p className="text-muted fs-5 mb-0">
            If the price of oil rises by $1, you would then make 10 x $1, so you would come out with $10 of profit. However, if the price fell by $1, you would lose 10 x $1, and take an $10 loss, because you are trading on margin.
          </p>
        </div>
      </div>
    </section>
  );
}
