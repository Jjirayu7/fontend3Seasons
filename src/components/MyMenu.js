function MyMenu(props) {
  return (
    <div>
      <div className="modal" tabIndex="-1" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-titlr">{props.title}</h5>
                        <button 
                        id={`${props.id}_btnClose`}
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>

            </div>

        </div>
    </div>
  );
}

export default MyMenu;