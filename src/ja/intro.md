---
icon: circle-info
bgImage: /assets/images/tonarino.png
---
# 自己紹介

## short bio

高校卒業後、名古屋大学経済学部に入学し、主に統計の分野を専攻していました。
大学在学中、[Human Dataware Lab](https://www.hdwlab.co.jp/) でインターンを実施し、[Tarvo](https://tarvo.co.jp/)でパートタイムの仕事をしました。
大学卒業後は日本IBM株式会社に入社し、主に保険会社様に対するシステム開発案件に携わりました。
また、生成AI関連のプロジェクトで実績を残しました。

現在米国カーネギーメロン大学のComputer science学科の大学院にある計算機言語科学院（Language technology institute）にて修士の学生をしています。
[渡邉教授](https://sites.google.com/view/shinjiwatanabe)の研究室([WAVLab](https://www.wavlab.org/))に所属して、音声と言語に関する技術の研究をしています。


## Research Interests

**精度を落とさない推論速度の向上**

近年のAI関連の技術の発展により、音声分野ではSelf-Supervised Learning (SSL) モデルを用いることで、音声認識等の精度を大幅に向上することができます。
しかし、こうしたモデルのパラメータ量は非常に多く、SSLモデルと音声認識を組み合わせたシステム全体の推論速度はかなり遅くなってしまいます。
SSLを含めたような大規模なシステムを、Rasberry piのような計算能力の高くないものでも計算できるようにしたいです。

- 目標
  | 現在 | 目標 |
  | ---  | ---  |
  | XXs  | XXs  |
  
  Rasberry piは4Bを採用しています。音声認識モデルはHuBert+E-Branchformerベースのモデルです。


**音声からStructured Textの生成**

日本IBMでの経験を経て、会話から構造的なテキストを生成することの重要性に気が付きました。
特にStreamingなモデルでの生成が可能になれば、例えば議事録の作成から、ちょっとした会話からのToDOの作成、先輩社員からの説明を資料に落とし込んだりする際に活用できます。
また、「話しているうちに脱線して、もともと何の会話だったっけ」というような事態も防ぐことができるかもしれません。
現在音声認識と生成AIを活用してこうしたサービスがあると思いますが、End-to-EndなStreaming modelで実現できないか考えています。
