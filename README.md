# 🎓 Evaluación Integradora · Plataforma de Cursos

> **Diplomado IPS · Módulo 3** — Backend y APIs REST
> Instituto Profesional San Sebastián

Este es un proyecto creado por Francisco San Juan

---

## 🚀 Cómo empezar

Haz un clone e instala:

```bash
git clone https://github.com/franciscosanjuanipss/IPSS-DIPLOMADO-CURSO3-Evaluacion-Final.git
cd IPSS-DIPLOMADO-CURSO3-Evaluacion-Final
npm install
```

**Configura tu MongoDB:** abre `config/db.js` y reemplaza `usuario-mongo` y `clave-secreta` por los de tu cluster de Atlas.
Por problemas con mi dns tuve que crear una BD en un localhost pero de igual manera dejo la otra conexión

Levanta el servidor:

```bash
npm run dev
```

Si ves `✅ API escuchando en http://localhost:3000`, ya está. Entra a
`http://localhost:3000/` y deberías ver `{ "ok": true, ... }`.

---

## 📂 Qué hay en el repositorio

```
├── server.js              arranque (listo — solo descomenta tus rutas)
├── config/
│   ├── db.js              conexión a Mongo (pon tu cadena)
│   └── jwt.js             el secreto para firmar los tokens
├── models/                ← los 3 schemas (TÚ los defines)
│   ├── profesor.model.js
│   ├── alumno.model.js
│   └── curso.model.js
├── middlewares/
│   └── proteger.js        el guardia JWT + el filtro por rol (TÚ los completas)
├── routes/                conecta cada ruta con su controller
├── controllers/           reciben la petición y responden
└── services/              hablan con la base de datos
```

Los archivos con **`// TODO:`** son los que tienes que completar. Los demás
(`server.js`, `config/`, el manejo de errores en los `try/catch`) ya funcionan.

---

Se agrega link del video
Link: https://youtu.be/yOdH8Ydxl7A

---

**Instituto Profesional San Sebastián** · Diplomado · Módulo 3 — Backend y APIs REST
