/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import PhoneInput from '@quoine/components/PhoneInput';
import DateSelect from '@quoine/components/DateSelect';
import Button from '@quoine/components/Button';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/SignUp/Form/styles.css';

import AddressSelect from '../AddressSelect';
import IndustrySelect from '../IndustrySelect';
import MoneySelect from '../MoneySelect';
import PurposeSelect from '../PurposeSelect';
import ExperienceSelect from '../ExperienceSelect';
import RelationSelect from '../RelationSelect';

import RepForm from '../RepForm';
import TraderForm from '../TraderForm';
import ShsForm from '../ShsForm';

const SignUpForm3JpIndiView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>

    {/*
      BASIC
    */}

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="法人名">
          <TextBox
            value={form.name} onChange={onChange.name} autoFocus required
            pattern="[一-龯]+" title="全角文字のみ入力してください。"
          />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="フリガナ">
          <TextBox
            value={form.nameKana} onChange={onChange.nameKana} required
            pattern="[゠-ヿ]+" title="カタカナ文字のみ入力してください"
          />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="ご住所">
          <AddressSelect value={form.address} onChange={onChange.address} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="電話番号">
          <PhoneInput value={form.phone} onChange={onChange.phone} required />
        </Input>
      </div>

    </div>

    {/*
      SUMMARY
    */}

    <h1 className={styles.heading}>法人概要</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="業種">
          <IndustrySelect value={form.industry} onChange={onChange.industry} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="業務内容">
          <TextBox value={form.business} onChange={onChange.business} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="設立年月">
          <DateSelect value={form.established} onChange={onChange.established} date={false} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="決算日">
          <DateSelect value={form.report} onChange={onChange.report} year={false} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="ホームページアドレス">
          <TextBox value={form.website} onChange={onChange.website} required />
        </Input>
      </div>

    </div>

    {/*
      REPRESENTATIVE
    */}

    <h1 className={styles.heading}>代表者</h1>

    <div className={styles.body}>
      <RepForm value={form.rep} onChange={onChange.rep} />
    </div>

    {/*
      SHAREHOLDER
    */}

    <h1 className={styles.heading}>実質的支配者</h1>

    <div className={styles.body}>
      <ShsForm value={form.shs} onChange={onChange.shs} />
    </div>

    {/*
      TRADER
    */}

    <h1 className={styles.heading}>担当者（口座管理者）情報</h1>

    <div className={styles.body}>
      <TraderForm value={form.trader} onChange={onChange.trader} />
    </div>

    {/*
      INCOME & INVESTMENT
    */}

    <h1 className={styles.heading}>財務情報・投資経験</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="事業体の年商">
          <MoneySelect value={form.incomeGross} onChange={onChange.incomeGross} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="事業体の税抜き後年間所得">
          <MoneySelect value={form.incomeNet} onChange={onChange.incomeNet} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="事業体の自己資本">
          <MoneySelect value={form.capital} onChange={onChange.capital} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="投資目的" noBorder>
          <PurposeSelect value={form.purpose} onChange={onChange.purpose} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="投資経験">
          <ExperienceSelect value={form.experience} onChange={onChange.experience} />
        </Input>
      </div>

    </div>

    {/*
      RELATION
    */}

    <h1 className={styles.heading}>申込の経緯</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="申込の経緯">
          <RelationSelect value={form.relation} onChange={onChange.relation} />
        </Input>
      </div>

    </div>

    <div className={styles.input}>
      <Button type="submit" styleName="modal accent">
        {translate('sign-up:action-next')}
      </Button>
    </div>

  </form>
);

SignUpForm3JpIndiView.propTypes = {
  ...FormWrapperPropTypes,
};

export default SignUpForm3JpIndiView;
