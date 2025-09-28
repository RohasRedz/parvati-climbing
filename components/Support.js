export default function Support() {
  return (
    <section className="support" id="support">
      <h2>Support Our Work</h2>
      <p style={{ maxWidth: '800px' }}>
        Your contribution helps us build accessible climbing infrastructure, provide training and gear, and empower
        communities around the world.
      </p>
      <div className="actions">
        <button
          onClick={() => {
            if (typeof window !== 'undefined') alert('Thank you for your generosity!');
          }}
        >
          Donate Now
        </button>
        <button
          onClick={() => {
            if (typeof window !== 'undefined') alert('Thank you for volunteering!');
          }}
        >
          Volunteer
        </button>
      </div>
    </section>
  );
}