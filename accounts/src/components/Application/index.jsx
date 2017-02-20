import React from 'react';

import translate from '@quoine/translate';

import Carousel from '@quoine/components/Carousel';
import LanguageSelect from '@quoine/components/LanguageSelect';
import ThemeSelect from '@quoine/components/ThemeSelect';
import ConfirmationManage from '@quoine/components/ConfirmationManage';

import DailyReport from 'components/DailyReport';
import Row from 'components/SettingsRow';
import Body from 'components/SettingsBody';

const Application = () => (
  <Body>
    <div>
      <Row label={translate('language:title')}>
        <LanguageSelect />
      </Row>
    </div>
    <div>
      <Row label={translate('settings:theme-title')}>
        <Carousel height={9.67}>
          <ThemeSelect direction="row" />
        </Carousel>
      </Row>
    </div>
    <div>
      <Row label={translate('daily-report:title')}>
        <DailyReport />
      </Row>
    </div>
    <div>
      <Row label={translate('confirmation:title')}>
        <ConfirmationManage />
      </Row>
    </div>
  </Body>
);

export default Application;
