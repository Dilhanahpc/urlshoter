url-shortener-platform/
│
├── services/
│   ├── api-gateway/
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── middlewares/
│   │   │   ├── proxy/
│   │   │   ├── config/
│   │   │   ├── app.js
│   │   │   └── server.js
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── url-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   ├── utils/
│   │   │   ├── metrics/
│   │   │   ├── app.js
│   │   │   └── server.js
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── redirect-service/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── cache/
│   │   │   ├── routes/
│   │   │   ├── config/
│   │   │   ├── metrics/
│   │   │   ├── app.js
│   │   │   └── server.js
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│   │
│   ├── analytics-service/
│   │   ├── src/
│   │   │   ├── consumers/
│   │   │   ├── services/
│   │   │   ├── repositories/
│   │   │   ├── models/
│   │   │   ├── config/
│   │   │   ├── metrics/
│   │   │   ├── app.js
│   │   │   └── server.js
│   │   ├── tests/
│   │   ├── Dockerfile
│   │   └── package.json
│
├── shared/
│   └── common/
│       ├── logger/
│       ├── errors/
│       ├── utils/
│       └── constants/
│
├── infra/
│   ├── docker/
│   │   ├── docker-compose.dev.yml
│   │   ├── docker-compose.prod.yml
│   │   └── .env
│   │
│   ├── nginx/
│   │   └── nginx.conf
│   │
│   ├── kubernetes/        # (future-ready)
│   │   ├── deployments/
│   │   ├── services/
│   │   └── ingress/
│   │
│   ├── terraform/         # (cloud infra as code)
│   │   ├── aws/
│   │   └── modules/
│
├── monitoring/
│   ├── prometheus/
│   │   └── prometheus.yml
│   │
│   ├── grafana/
│   │   ├── dashboards/
│   │   └── datasources/
│
├── ci-cd/
│   ├── github-actions/
│   │   └── deploy.yml
│
├── scripts/
│   ├── build.sh
│   ├── deploy.sh
│   └── migrate.sh
│
├── .env
├── .gitignore
├── README.md
└── package.json (optional root)
