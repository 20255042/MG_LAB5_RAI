import 'bootstrap/dist/css/bootstrap.min.css'
function Home(){
    return (
        <>
        
        <h1> Student Services Portal</h1>

        <p>
            Welcome to the university student portal
        </p>
        
        <h3>Recent Updates: </h3>
        
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Fun Racing</h5>
      <small >1 day ago</small>
    </div>
    <p className="mb-1">Fun Racing is now available. Join us!</p>
    <small className="text-body-secondary">we need to stay fit</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Walang Pasok ALL LEVELS</h5>
      <small >3 days ago</small>
    </div>
    <p className="mb-1">classNamees and work at all levels are officially SUSPENDED today July 19, 2025 (Saturday) due to Tropical Depression Crising.</p>
    <small className="text-body-secondary">Stay safe and alert at all times, UBians!</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Tuition Payment Method</h5>
      <small className="text-body-secondary">5 days ago</small>
    </div>
    <p className="mb-1">would like to inform all students that direct payment of tuition and other school fees at SM Payment Centers will no longer be available starting September 30, 2024.</p>
    <small className="text-body-secondary">stay tuned for further announcements</small>
  </a>
</div>

        </>
    );
}
export default Home;