import PropTypes from 'prop-types';
/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import PhoneInput from '@quoine/components/PhoneInput';
import DateInput from '@quoine/components/DateInput';
import Button from '@quoine/components/Button';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import AddressInput from '../AddressInput';
import IndustryInput from '../IndustryInput';
import MoneyInput from '../MoneyInput';
import PurposeInput from '../PurposeInput';
import ExperienceInput from '../ExperienceInput';
import RelationInput from '../RelationInput';

import RepInput from '../RepInput';
import TraderForm from '../TraderForm';
import ShsInput from '../ShsInput';

const UserForm3JpIndiView = ({ form, onChange, onSubmit, edit }) => (
  <form onSubmit={onSubmit}>

    {/*
      BASIC
    */}

    <div className={styles.body}>

      {edit ? (
        <p
          className={styles.description}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate('edit-user:description'),
          }}
        />
      ) : null}

      <div className={styles.input}>
        <LargeField label="法人名">
          <TextInput value={form.name} onChange={onChange.name} autoFocus border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="フリガナ">
          <TextInput value={form.nameKana} onChange={onChange.nameKana} pattern="[゠-ヿ]+" title="カタカナ文字のみ入力してください" border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="ご住所">
          <AddressInput value={form.address} onChange={onChange.address} border={2} required />
        </LargeField>
      </div>

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="電話番号">
            <PhoneInput value={form.phone} onChange={onChange.phone} border={2} required />
          </LargeField>
        </div>
      )}

    </div>

    {/*
      SUMMARY
    */}

    <h1 className={styles.heading}>法人概要</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="業種">
          <IndustryInput value={form.industry} onChange={onChange.industry} border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="業務内容">
          <TextInput value={form.business} onChange={onChange.business} border={2} required />
        </LargeField>
      </div>

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="設立年月">
            <DateInput value={form.established} onChange={onChange.established} date={false} border={2} />
          </LargeField>
        </div>
      )}

      <div className={styles.input}>
        <LargeField label="決算日">
          <DateInput value={form.report} onChange={onChange.report} year={false} border={2} />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="ホームページアドレス">
          <TextInput value={form.website} onChange={onChange.website} border={2} required />
        </LargeField>
      </div>

      <p className={styles.help}>
        ホームページが無い場合は、「なし」と入力ください。
      </p>

    </div>

    {/*
      REPRESENTATIVE
    */}

    <h1 className={styles.heading}>代表者</h1>

    <div className={styles.body}>
      <RepInput value={form.rep} onChange={onChange.rep} border={2} required />
    </div>

    {/*
      SHAREHOLDER
    */}

    <h1 className={styles.heading}>実質的支配者</h1>

    <div className={styles.body}>
      <ShsInput value={form.shs} onChange={onChange.shs} border={2} required />
    </div>

    {/*
      TRADER
    */}

    <h1 className={styles.heading}>担当者（口座管理者）情報</h1>

    <div className={styles.body}>
      <TraderForm value={form.trader} onChange={onChange.trader} border={2} required />
    </div>

    {/*
      INCOME & INVESTMENT
    */}

    <h1 className={styles.heading}>財務情報・投資経験</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="事業体の年商">
          <MoneyInput value={form.incomeGross} onChange={onChange.incomeGross} border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="事業体の税抜き後年間所得">
          <MoneyInput value={form.incomeNet} onChange={onChange.incomeNet} border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="事業体の自己資本">
          <MoneyInput value={form.capital} onChange={onChange.capital} border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="投資目的">
          <PurposeInput value={form.purpose} onChange={onChange.purpose} border={2} />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="投資経験">
          <ExperienceInput border={2} value={form.experience} onChange={onChange.experience} required />
        </LargeField>
      </div>

    </div>

    {/*
      RELATION
    */}

    {edit ? null : <h1 className={styles.heading}>申込の経緯</h1> }

    {edit ? null : (
      <div className={styles.body}>
        <div className={styles.input}>
          <LargeField label="申込の経緯">
            <RelationInput value={form.relation} onChange={onChange.relation} border={2} required />
          </LargeField>
        </div>
      </div>
    )}

    <div className={styles.input}>
      <Button type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

UserForm3JpIndiView.propTypes = {
  ...FormWrapperPropTypes,
  edit: PropTypes.bool,
};

export default UserForm3JpIndiView;
