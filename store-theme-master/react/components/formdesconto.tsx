import * as React from "react";
import '../style.global.css'


function formdesconto() {

  const onSubmit = (e: any) => {
    console.log(e.target),
     // e.preventDefault(),
      sendmasterDataprecadastro(e)
  }
  const sendmasterDataprecadastro = (e: any) => {
    let raw = JSON.stringify({
      city: e.target.city.value,
     // marketplace: e.target.marketplace.value,
      name: e.target.name.value,
      corporateName: e.target.corporateName.value,
      state: e.target.state.value,
      store: e.target.store.value,
      phone: e.target.phone.value,
      ecommerce: e.target.ecommerce.value,
      email: e.target.email.value,
      cnpj: e.target.cnpj.value

    });
    var requestOptions = {
      method: 'POST',
      headers: {
        "X-VTEX-API-AppToken": "EONDPWRJPJAVCTNFGKNZHIVCOCQDERZNPJLUKZUFZMWHOYRVGDGRTWOMJVJCGWWNMUQALCKHUCLRMAMYBKMTJOUXDDLRBJEOWTWMWPXCVAWBGXRXXOGIWFZMUPKSTJTV",
        "X-VTEX-API-AppKey": "vtexappkey-basedeapoio-HVJIUR",
        "Accept": "application/json",
        "Content-Type": "application/json"

      },
      body: raw,
      //redirect: 'follow'
    };

    fetch("/api/dataentities/FO/documents", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
      //.then(response => response.text())
      .then(result => console.log(result))

    .catch(error => console.log('error', error));

    



}
return (
  <div className="form-control">
    <h4 className="formTitle">Bem-vindo a Cirúrgica Base de Apoio!</h4>
    <p className="textoP">Cadastre seu CNPJ e obtenha descontos especiais de compra.</p>
    <p className="textoP">Produtos médicos, hospitalares, odontológicos, e muito mais!</p>
    <p className="textoP">Venha conhecer a nossa árvore de produto.</p>
    <form id="cadastro" onSubmit={onSubmit}>
      <div className="mon">
        <div className="div1">
          <div className="form-item">
            <label> Nome completo do responsável </label>
            <input className="form-input" type="text" required name='name' />
          </div>
          <div className="form-item">
            <label> Email </label>
            <input className="form-input" type="text" required name='email' />
          </div>
          <div className="form-item">
            <label> Telefone </label>
            <input className="form-input" type="text" required name='phone' />
          </div>
          <div className="form-item">
            <label> Nome fantasia </label>
            <input className="form-input" type="text" required name='store' />
          </div>
          <div className="form-item">
            <label> Razão social </label>
            <input className="form-input" type="text" required name='corporateName' />
          </div>
        </div>
        <div className="div2">
          <div className="form-item">
            <label> CNPJ </label>
            <input className="form-input" type="text" required name='cnpj' />
          </div>
          <div className="form-item">
            <label> Estado </label>
            <input className="form-input" type="text" required name='state' />
          </div>
          <div className="form-item">
            <label> Cidade </label>
            <input className="form-input" type="text" required name='city' />
          </div>
          <div className="form-item">
            <label> Possui website? </label>
            <input className="form-input" type="text" required name='ecommerce' />
          </div>
        </div>
      </div>

      <small className="form-text" >Não compartilharemos seus dados com ninguém.</small>

      <div className="buttonSubmit">
        <button className="buttomConfirmar" form="cadastro" type="submit">Enviar pré-cadastro</button>
      </div>
    </form>
  </div>
)
}
export default formdesconto;