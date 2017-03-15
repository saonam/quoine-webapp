/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import Button from '@quoine/components/Button';
import DateSelect from '@quoine/components/DateSelect';
import Checkbox from '@quoine/components/Checkbox';
import PhoneInput from '@quoine/components/PhoneInput';
import Link from '@quoine/components/Link';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from 'components/SignUp/Form/styles.css';

import AddressSelect from '../AddressSelect';
import OccupationSelect from '../OccupationSelect';
import SourceSelect from '../SourceSelect';
import MoneySelect from '../MoneySelect';
import ExperienceSelect from '../ExperienceSelect';
import PurposeSelect from '../PurposeSelect';
import GenderSelect from '../GenderSelect';
import RelationSelect from '../RelationSelect';
import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';

const SignUpForm3JpIndiView = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>

    {/*
      BASIC
    */}

    <h1 className={styles.heading}>個人情報</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="名前（漢字）">
          <KanjiNameInput value={form.nameKanji} onChange={onChange.nameKanji} autoFocus required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="名前（カナ）">
          <KanaNameInput value={form.nameKana} onChange={onChange.nameKana} required />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="生年月日">
          <DateSelect value={form.birth} onChange={onChange.birth} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="性別" noBorder>
          <GenderSelect value={form.gender} onChange={onChange.gender} />
        </Input>
      </div>

      <div className={styles.input}>
        <Input large label="外国政府等の重要な公人" noBorder>
          <Checkbox id="pep" value={form.pep} onChange={onChange.pep} required>
            私は外国の重要な公人、もしくはその親族ではありません。
          </Checkbox>
        </Input>
        <p className={styles.help}>
          <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
            外国PEPsについて
          </Link>
        </p>
      </div>

    </div>

    {/*
      CONTACT
    */}

    <h1 className={styles.heading}>連絡先</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="住所">
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
      OCCUPATION
    */}

    <h1 className={styles.heading}>ご職業</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="ご職業">
          <OccupationSelect value={form.occupation} onChange={onChange.occupation} />
        </Input>
        <p className={styles.help}>
          ※「学生」で収入源に「給与所得」「事業所得」がある場合、ご職業は「パート・アルバイト・派遣・契約」または「自営業」を選択してください。
        </p>
      </div>

      {['専業主婦（主夫）', '無職'].indexOf(form.occupation.job) === -1 ? (
        <div className={styles.input}>
          <Input large label="勤務先住所">
            <AddressSelect value={form.workAddress} onChange={onChange.workAddress} />
          </Input>
        </div>
      ) : null}

      {['専業主婦（主夫）', '無職'].indexOf(form.occupation.job) === -1 ? (
        <div className={styles.input}>
          <Input large label="電話番号">
            <PhoneInput value={form.workPhone} onChange={onChange.workPhone} required />
          </Input>
        </div>
      ) : null}

    </div>

    {/*
      INCOME & INVESTMENT
    */}

    <h1 className={styles.heading}>財務情報・投資経験</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <Input large label="主な収入源">
          <SourceSelect value={form.source} onChange={onChange.source} />
        </Input>
        <p className={styles.help}>
          ※ご本人様の収入となり、配偶者の収入、仕送り等は含まれません。
        </p>
      </div>

      <div className={styles.input}>
        <Input large label="年収">
          <MoneySelect value={form.income} onChange={onChange.income} />
        </Input>
        <p className={styles.help}>
          ※ご本人様の収入となり、配偶者の収入、仕送り等は含まれません。
        </p>
      </div>

      <div className={styles.input}>
        <Input large label="投資可能資産">
          <MoneySelect value={form.investable} onChange={onChange.investable} />
        </Input>
      </div>

      {['専業主婦（主夫）', '学生', '無職'].indexOf(form.occupation.job) !== -1 ? (
        <div className={styles.input}>
          <Input large label="投資可能資産はご自身の資産でお間違えありませんか？" noBorder>
            <Checkbox id="permission" value={form.permission} onChange={onChange.permission} required>
              はい
            </Checkbox>
          </Input>
        </div>
      ) : null}

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
