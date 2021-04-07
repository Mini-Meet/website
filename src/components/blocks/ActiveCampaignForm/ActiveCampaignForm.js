// @flow
import React, { Component } from 'react';
// import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

// import brochurePdf from '../../../assets/pdf/prod-mba-brochure.pdf';

import './ActiveCampaignForm.scss';

type Props = {
  formId: Number,
  submitEmail: Function,
};

export default class ActiveCampaignForm extends Component<Props> {
  render() {
    // const formResponse = (
    // window.location.href.match(/success\/\?type=(.*\b)/) ?
    // window.location.href.match(/success\/\?type=(.*\b)/)[1] :
    // null
    // )

    const ACTIVE_CAMPAIGN_FORM_ACTION_URL =
      'https://productmastery.activehosted.com/proc.php?';

    const { formId, submitEmail } = this.props;
    // const formId = 1;

    return (
      <div className="activeCampaign">
        <form
          action={ACTIVE_CAMPAIGN_FORM_ACTION_URL}
          method="POST"
          id="_form_newsletter_"
          className="activeCampaign__form"
          noValidate
        >
          <input type="hidden" name="u" value={formId} />
          <input type="hidden" name="f" value={formId} />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <div className="activeCampaign__form_content">
            <div className="">
              <label htmlFor="email" className="_form-label" id="label"></label>
              <div className="_field-wrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
            <div className="_button-wrapper">
              <Button
                id="_form_newsletter_submit"
                className="_submit"
                type="submit"
                onClick={submitEmail}
              >
                GET MINI MBA
              </Button>
            </div>
            <div className="_clear-element"></div>
          </div>
          <div classNames="_form-thank-you"></div>
        </form>
      </div>
    );
  }
}
