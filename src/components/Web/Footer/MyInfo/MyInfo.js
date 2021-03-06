import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

/**
 * del infor name proy and comment
 */

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Cata-Book" />
      <h4>
        Entra en el mundo del desarrollo web, disfruta creando proyectos de todo
        tipo, deja que tú imaginación fluya y crea verdaderas maravillas!!
      </h4>
      <SocialLink />
    </div>
  );
}
