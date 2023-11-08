import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";
import { useState,useRef, useEffect } from "react";
import { useAppContext } from "../contexts/app/app-context";
import { changeLanguage } from "i18next";

const ChangeLanguage = () => {
    const [show,setShow]=useState(false);
    const ref =useRef();

    const {language,ChangeLanguage}=useAppContext();

    useEffect(()=>{
        const checkIfClickOutside = e =>{
            if(show && ref.current && !ref.current.contains(e.target)){
                setShow(false)
            }
        }
        document.addEventListener('mousedown',checkIfClickOutside);

        return () =>{
            document.removeEventListener('mousedown',checkIfClickOutside)
        }
    })
  return (
    <div>
      <a className="nav-flag dropdown-toggle" onClick={()=>setShow(true)}>
        <img src={usFlag} />
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-end ${show ? 'show' : undefined}`}>
        <a className="dropdown-item fw-border d-flex align-items-center gap-2" style={{textAlign: language === 'fa' ? "right" : "left"}} onClick={()=> changeLanguage('fa')}>
          <img src={language === 'fa' ? faFlag : usFlag } width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a className="dropdown-item fw-border d-flex align-items-center gap-2" style={{textAlign: language === 'fa' ? "right" : "left"}} onClick={()=> changeLanguage('en')}>
          <img src={usFlag} width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
