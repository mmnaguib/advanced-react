import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const Register = () => {
  const { t } = useTranslation();
  return (
    <div>
      <form>
        <Row>
          <Col md="6">
            <label htmlFor="first-name">{t("First Name")}</label>
            <input type="text" name="first-name" className="form-control" />
          </Col>
          <Col md="6">
            <label htmlFor="last-name">{t("Last Name")}</label>
            <input type="text" name="last-name" className="form-control" />
          </Col>
          <Col md="6">
            <label htmlFor="email">{t("Email")}</label>
            <input type="text" name="email" className="form-control" />
          </Col>
          <Col md="6">
            <label htmlFor="password">{t("Password")}</label>
            <input type="password" name="password" className="form-control" />
          </Col>
          <Col md="6">
            <label htmlFor="phone">{t("Phone")}</label>
            <input type="text" name="phone" className="form-control" max={11} />
          </Col>
          <Col md="6">
            <label htmlFor="address">{t("Address")}</label>
            <textarea
              cols={3}
              rows={2}
              style={{ resize: "none" }}
              className="form-control"
            ></textarea>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Register;
