export const portfolio = [
  {
    id: 1,
    name: 'アルゴリズムドキュメント',
    position: 'Full stack developer',
    description:
      'データ構造や探索・ソートアルゴリズムの概要や計算量をまとめたサイトをReactベースで作成しました。',
    authorName: 'Atsushi Hatakeyama',
    authorImgUrl: '/images/avatar.png',
    portfolioImgUrl: '/images/algorithm.png',
    applicationDescription:
      'このアプリケーションは、データ構造や探索・ソートアルゴリズムの概念を可視化し、学習者がより直感的に理解できるように設計されています。Reactを用いてフロントエンドを構築し、P5.jsとManimを使用してアルゴリズムのアニメーションを実現しています。',
    techstackDescription:
      'このアプリケーションの技術スタックには、Reactをメインのフレームワークとして使用し、P5.jsで描画を行い、Manimでアニメーションを作成しています。また、バックエンドにはNode.jsとExpressを使用し、データベースにはMongoDBを採用しています。',
    techDescription:
      'このプロジェクトで直面した技術的な課題には、複雑なアルゴリズムのアニメーションの同期、リアルタイムでのユーザー入力処理、パフォーマンスの最適化などがありました。これらの課題を克服するために、非同期処理やWeb Workerを活用し、効率的な描画アルゴリズムを設計しました。',
    link: 'https://algorithm-visualizer-bqz.pages.dev/',
    date: 'November 28, 2023',
  },
  {
    id: 2,
    name: 'CtoCプラットフォームの開発',
    position: 'Full stack developer',
    description:
      '個人間の取引を円滑にするためのプラットフォームを開発しました。ユーザー間での売買やサービスの交換が安全かつ効率的に行えるよう設計されています。',
    authorName: 'Atsushi Hatakeyama',
    authorImgUrl: '/images/avatar.png',
    portfolioImgUrl: '/images/ctoc-platform.png',
    applicationDescription:
      'このアプリケーションは、個人間の取引をサポートするために設計されており、使いやすいUIと強力なセキュリティ機能を備えています。ユーザーは商品やサービスを簡単にリストアップし、取引を管理できます。',
    techstackDescription:
      '技術スタックには、フロントエンドにReact、バックエンドにNode.jsとExpress、データベースにMongoDBを使用しています。さらに、リアルタイムの通知とチャット機能にはSocket.IOを導入しています。',
    techDescription:
      '主な技術的課題は、ユーザーのデータセキュリティ、スケーラビリティ、およびリアルタイムのデータ同期でした。これらを克服するために、JWTを用いた認証と、負荷分散のためのクラウドベースのソリューションを採用しました。',
    link: 'https://ctoc-platform-example.com/',
    date: 'November 28, 2023',
  },
  {
    id: 3,
    name: 'VScode extension',
    position: 'Full stack developer',
    description:
      'Visual Studio Code用の拡張機能を開発し、コーディングの効率を向上させるための便利なツールを提供しました。',
    authorName: 'Atsushi Hatakeyama',
    authorImgUrl: '/images/avatar.png',
    portfolioImgUrl: '/images/vscode-extension.png',
    applicationDescription:
      'この拡張機能は、Visual Studio Codeのユーザーエクスペリエンスを向上させるために設計されており、コード補完、スニペット管理、リアルタイムのエラーチェックなどの機能を提供します。',
    techstackDescription:
      'この拡張機能の技術スタックには、TypeScript、Node.js、およびVSCodeのAPIを使用しています。これにより、堅牢で拡張性のあるツールを開発することができました。',
    techDescription:
      '主な技術的課題は、VSCodeのAPIの理解と効果的な利用、リアルタイムのエラーチェック機能の実装、およびユーザーインターフェースの最適化でした。これらの課題を克服するために、TypeScriptとNode.jsの知識を活用し、モジュール化されたコードベースを構築しました。',
    link: 'https://vscode-extension-example.com/',
    date: 'November 28, 2023',
  },
  {
    id: 4,
    name: '100万アクセス対応可能のインフラ構築',
    position: 'Full stack developer',
    description:
      '大規模なトラフィックを処理できるインフラストラクチャを構築し、信頼性とスケーラビリティを向上させました。',
    authorName: 'Atsushi Hatakeyama',
    authorImgUrl: '/images/avatar.png',
    portfolioImgUrl: '/images/architecture.png',
    applicationDescription:
      'このプロジェクトでは、100万アクセスを同時に処理できる高可用性のインフラストラクチャを設計・構築しました。フロントエンドにはReactを使用し、バックエンドはNode.jsとExpressで構築。AWSを利用してスケーラブルなクラウド環境を実現し、負荷分散や自動スケーリングを導入しています。',
    techstackDescription:
      '技術スタックには、フロントエンドにReact、バックエンドにNode.jsとExpress、データベースにはMongoDBを使用しています。AWSのEC2、S3、RDS、CloudFrontなどを活用し、インフラ全体の信頼性とスケーラビリティを強化しました。CI/CDパイプラインにはJenkinsを導入し、自動化とデプロイの効率化を図っています。',
    techDescription:
      'このプロジェクトでの技術的な課題には、大規模なトラフィック処理、データベースのパフォーマンス最適化、リアルタイムモニタリングの実装などが含まれました。負荷分散のためにAWSのElastic Load Balancingを使用し、データベースのスケーリングにはシャーディング技術を採用しました。また、New Relicを使用してリアルタイムでシステムのパフォーマンスを監視し、ボトルネックの迅速な特定と解決を行いました。',
    link: 'https://high-traffic-infra-example.com/',
    date: 'November 28, 2023',
  },
  {
    id: 5,
    name: 'CtoCプラットフォームの開発',
    position: 'Full stack developer',
    description:
      'データ構造や探索・ソートアルゴリズムの概要や計算量をまとめたサイトをReactベースで作成しました。',
    authorName: 'Atsushi Hatakeyama',
    authorImgUrl: '/images/motivation.jpeg',
    portfolioImgUrl: '/images/motivation.jpeg',
    applicationDescription:
      'このアプリケーションは、データ構造や探索・ソートアルゴリズムの概念を可視化し、学習者がより直感的に理解できるように設計されています。Reactを用いてフロントエンドを構築し、P5.jsとManimを使用してアルゴリズムのアニメーションを実現しています。',
    techstackDescription:
      'このアプリケーションの技術スタックには、Reactをメインのフレームワークとして使用し、P5.jsで描画を行い、Manimでアニメーションを作成しています。また、バックエンドにはNode.jsとExpressを使用し、データベースにはMongoDBを採用しています。',
    techDescription:
      'このプロジェクトで直面した技術的な課題には、複雑なアルゴリズムのアニメーションの同期、リアルタイムでのユーザー入力処理、パフォーマンスの最適化などがありました。これらの課題を克服するために、非同期処理やWeb Workerを活用し、効率的な描画アルゴリズムを設計しました。',
    link: 'https://algorithm-visualizer-bqz.pages.dev/',
    date: 'November 28, 2023',
  },
]
