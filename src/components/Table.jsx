import React from 'react';

const Table = () => {
  return (
    <div className="table-wrapper">
      <h2 className="table-section-title">協賛内容</h2>
      <p className="intro-text">
        ※ 同一枠へ複数の企業様からご応募があった場合は、抽選にて決定いたします。
        <br />
        各募集の締切日以降に抽選結果をメールにてご連絡申し上げます。
        <br />
        ※ 各申し込みは、オンラインでのご登録のみ受付いたします。
        <br />
        ※
        原則電話およびFAXによるお申し込みはお受けできかねますことご了承ください。
        <br />
        ※
        本会の趣旨に沿わない内容であると主催者が判断した場合、お申込みをお断りする場合がございます。
        <br />
        予めご了承ください。
      </p>
      <table className="sponsorship-table">
        <thead>
          <tr>
            <th className="sponsorship-th" colSpan={2}>
              協賛内容
            </th>
            <th className="sponsorship-th">募集枠</th>
            <th className="sponsorship-th">協賛金</th>
            <th className="sponsorship-th">申込み締切</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sponsorship-td text-left">モーニングセミナー</td>
            <td className="sponsorship-td text-left">グランドボールルームA</td>
            <td className="sponsorship-td text-right">1枠</td>
            <td className="sponsorship-td text-right">560,000円</td>
            <td className="sponsorship-td text-center" rowSpan={5}>
              2025年8月1日(金)
            </td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" rowSpan={3}>
              ランチョンセミナー
            </td>
            <td className="sponsorship-td text-left">グランドボールルームA</td>
            <td className="sponsorship-td text-right">1枠</td>
            <td className="sponsorship-td text-right">760,000円</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left">グランドボールルームB</td>
            <td className="sponsorship-td text-right">1枠</td>
            <td className="sponsorship-td text-right">560,000円</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left">スカイバンケット</td>
            <td className="sponsorship-td text-right">1枠</td>
            <td className="sponsorship-td text-right">360,000円</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left">オンデマンド配信</td>
            <td className="sponsorship-td text-left">各会場</td>
            <td className="sponsorship-td text-right">4枠</td>
            <td className="sponsorship-td text-right">300,000円</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left">企業展示開催</td>
            <td className="sponsorship-td text-left">基礎小間</td>
            <td className="sponsorship-td text-right">6枠</td>
            <td className="sponsorship-td text-right">300,000円</td>
            <td className="sponsorship-td text-center">2025年8月1日(金)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              ネームストラップ広告
            </td>
            <td className="sponsorship-td text-right">3社</td>
            <td className="sponsorship-td text-right">350,000円</td>
            <td className="sponsorship-td text-center">2025年8月1日(金)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              コングレスバッグ広告
            </td>
            <td className="sponsorship-td text-right">1社</td>
            <td className="sponsorship-td text-right">450,000円</td>
            <td className="sponsorship-td text-center">2025年7月2日(水)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              コングレスバッグ資料封入
            </td>
            <td className="sponsorship-td text-right">5社</td>
            <td className="sponsorship-td text-right">50,000円</td>
            <td className="sponsorship-td text-center">2025年7月2日(水)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              ボールペン広告
            </td>
            <td className="sponsorship-td text-right">1社</td>
            <td className="sponsorship-td text-right">120,000円</td>
            <td className="sponsorship-td text-center">2025年7月2日(水)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              ウェルカムボード広告
            </td>
            <td className="sponsorship-td text-right">15社</td>
            <td className="sponsorship-td text-right">30,000円</td>
            <td className="sponsorship-td text-center">2025年8月20日(水)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              幕間CM広告
            </td>
            <td className="sponsorship-td text-right">10社</td>
            <td className="sponsorship-td text-right">100,000円</td>
            <td className="sponsorship-td text-center">2025年8月29日(金)</td>
          </tr>
          <tr>
            <td className="sponsorship-td text-left" colSpan={2}>
              ホームページバナー広告
            </td>
            <td className="sponsorship-td text-right">2社</td>
            <td className="sponsorship-td text-right">100,000円</td>
            <td className="sponsorship-td text-center">2025年9月13日(月)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
