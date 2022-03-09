import '../styles/spinner.css';

const Spinner = () => (
  <div className="spinner" data-testid="spinner">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
export default Spinner;
