import PropTypes from 'prop-types';
/* eslint-disable max-len */

import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import DateInput from '@quoine/components/DateInput';
import CheckboxInput from '@quoine/components/CheckboxInput';
import PhoneInput from '@quoine/components/PhoneInput';
import Link from '@quoine/components/Link';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import LargeField from 'components/LargeField';
import styles from 'components/UserForm/styles.css';

import AddressInput from '../AddressInput';
import OccupationInput from '../OccupationInput';
import SourceInput from '../SourceInput';
import MoneyInput from '../MoneyInput';
import ExperienceInput from '../ExperienceInput';
import PurposeInput from '../PurposeInput';
import GenderInput from '../GenderInput';
import RelationInput from '../RelationInput';
import KanaNameInput from '../KanaNameInput';
import KanjiNameInput from '../KanjiNameInput';

const UserForm3JpIndiView = ({ form, onChange, onSubmit, edit }) => (
  <form onSubmit={onSubmit}>
    {edit ? (
      <div className={styles.body}>
        <p
          className={styles.description}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: translate('edit-user:description'),
          }}
        />
        <p className={styles.help}>
          <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
            外国PEPsについて
          </Link>
        </p>
      </div>
    ) : null}
    {/*
      BASIC
    */}

    <h1 className={styles.heading}>個人情報</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="名前（漢字）">
          <KanjiNameInput value={form.nameKanji} onChange={onChange.nameKanji} autoFocus border={2} required />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="名前（カナ）">
          <KanaNameInput value={form.nameKana} onChange={onChange.nameKana} border={2} required />
        </LargeField>
      </div>

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="生年月日">
            <DateInput value={form.birth} onChange={onChange.birth} border={2} required />
          </LargeField>
        </div>
      )}

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="性別">
            <GenderInput value={form.gender} onChange={onChange.gender} border={2} required />
          </LargeField>
        </div>
      )}

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="外国政府等の重要な公人">
            <CheckboxInput id="pep" value={form.pep} onChange={onChange.pep} required>
              <p style={{ lineHeight: '24px' }}>
                私は外国の重要な公人、もしくはその親族ではありません。
              </p>
            </CheckboxInput>
          </LargeField>
          <p className={styles.help}>
            <Link pathname="/jp/pep.html" target="_blank" styleName="accent text">
              外国PEPsについて
            </Link>
          </p>
        </div>
      )}

    </div>

    {/*
      CONTACT
    */}

    <h1 className={styles.heading}>連絡先</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="住所">
          <AddressInput value={form.address} onChange={onChange.address} border={2} required />
        </LargeField>
      </div>

      {edit ? null : (
        <div className={styles.input}>
          <LargeField label="携帯番号">
            <PhoneInput value={form.phone} onChange={onChange.phone} border={2} required />
          </LargeField>
        </div>
      )}

    </div>

    {/*
      OCCUPATION
    */}

    <h1 className={styles.heading}>ご職業</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="ご職業">
          <OccupationInput value={form.occupation} onChange={onChange.occupation} border={2} required />
        </LargeField>
        <p className={styles.help}>
          ※「学生」で収入源に「給与所得」「事業所得」がある場合、ご職業は「パート・アルバイト・派遣・契約」または「自営業」を選択してください。
        </p>
      </div>

      {['専業主婦（主夫）', '無職'].indexOf(form.occupation.job) === -1 ? (
        <div className={styles.input}>
          <LargeField label="勤務先住所">
            <AddressInput value={form.workAddress} onChange={onChange.workAddress} border={2} required />
          </LargeField>
        </div>
      ) : null}

      {['専業主婦（主夫）', '無職'].indexOf(form.occupation.job) === -1 ? (
        <div className={styles.input}>
          <LargeField label="電話番号">
            <PhoneInput value={form.workPhone} onChange={onChange.workPhone} border={2} required />
          </LargeField>
        </div>
      ) : null}

    </div>

    {/*
      INCOME & INVESTMENT
    */}

    <h1 className={styles.heading}>財務情報・投資経験</h1>

    <div className={styles.body}>

      <div className={styles.input}>
        <LargeField label="主な収入源">
          <SourceInput
            occupation={form.occupation}
            value={form.source} onChange={onChange.source} border={2} required
          />
        </LargeField>
        <p className={styles.help}>
          ※ご本人様の収入となり、配偶者の収入、仕送り等は含まれません。
        </p>
      </div>

      <div className={styles.input}>
        <LargeField label="年収">
          <MoneyInput value={form.income} onChange={onChange.income} border={2} required />
        </LargeField>
        <p className={styles.help}>
          ※ご本人様の収入となり、配偶者の収入、仕送り等は含まれません。
        </p>
      </div>

      <div className={styles.input}>
        <LargeField label="投資可能資産">
          <MoneyInput value={form.investable} onChange={onChange.investable} border={2} required />
        </LargeField>
      </div>

      {['専業主婦（主夫）', '学生', '無職'].indexOf(form.occupation.job) !== -1 ? (
        <div className={styles.input}>
          <LargeField label="投資可能資産はご自身の資産でお間違えありませんか？">
            <CheckboxInput id="permission" value={form.permission} onChange={onChange.permission} required>
              はい
            </CheckboxInput>
          </LargeField>
        </div>
      ) : null}

      <div className={styles.input}>
        <LargeField label="投資目的">
          <PurposeInput value={form.purpose} onChange={onChange.purpose} border={2} />
        </LargeField>
      </div>

      <div className={styles.input}>
        <LargeField label="投資経験">
          <ExperienceInput value={form.experience} onChange={onChange.experience} border={2} required />
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
