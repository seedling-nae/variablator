# Variablator

Variablator は変数名やメソッド名のまま日本語訳することができます。

## 使い方

サーバー起動
```
docker compose up -d
```

リクエスト
```
curl http://localhost:8000/translate -d '{"text":"helloWorld"}'
# => {"beforeTranslation":"hello world","afterTranslation":"ハローワールド"}%
```
