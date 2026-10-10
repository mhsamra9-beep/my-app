import React from "react";
import pathConstants from "../../routes/PathConstants";
import CustomButtom from "../../components/common/buttomcomponents";

const PageNotFound = () => {

  return (
    
      <section className="page-card">
        <h1>404</h1>
        <h2>{("Page Not Found")}</h2>
        <p>{("Page Not Found Description")}</p>
        <div className="page-actions">
          <CustomButtom
            buttonText={'Go to Home'}
            link={pathConstants.HOME}
            color="var(--main-color)"
            Color="var(--white)"
          />
        </div>
      </section>
  );
};

export default PageNotFound;
