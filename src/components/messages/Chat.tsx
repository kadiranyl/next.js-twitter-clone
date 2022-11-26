import { FormattedMessage } from "react-intl";

export default function Chat() {
  return (
    <div className="diveded-right">
        {true ? (
            <div className="select-message">
                <h2><FormattedMessage id="page.messages.select_a_message" /></h2>
                <p><FormattedMessage id="page.messages.select_a_message_description" /></p>
                <button className='btn blue-btn'><FormattedMessage id="global.new_message" /></button>
            </div>
        ) : (
            <span>ğ</span>
        )}
    </div>
  )
}
