import {CAUSES_DATA} from "../../constants/Data"
const  Causes = () => {
  return (
    <section className="section section-gray" id="causes">
      <div className="container">
        <h2 className="section-title text-center">Our Causes</h2>
        <p className="section-subtitle text-center">
          Support the causes that matter most to you
        </p>
        <div className="causes-grid">
          {CAUSES_DATA.map((cause) => {
            const progress = (cause.raised / cause.goal) * 100;
            return (
              <div key={cause.id} className="cause-card">
                <img src={cause.image} alt={cause.title} className="cause-image" />
                <div className="cause-content">
                  <h3 className="cause-title">{cause.title}</h3>
                  <p className="cause-description">{cause.description}</p>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <button className="btn btn-primary btn-full">Donate Now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes