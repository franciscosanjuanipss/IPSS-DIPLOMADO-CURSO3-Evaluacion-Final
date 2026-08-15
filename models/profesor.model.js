import mongoose from "mongoose";
// Para el hash de la contraseña usaremos bcrypt:
import bcrypt from "bcryptjs";
// ---------------------------------------------------------------------------
// MODELO — Profesor.
// ---------------------------------------------------------------------------
// TODO: define el schema del profesor. Campos (ver enunciado):
//   - nombre    (texto, obligatorio)
//   - email     (texto, único, obligatorio)
//   - password  (texto, obligatorio) → se guarda HASHEADO, nunca en texto plano
//
// Pista: usa { timestamps: true } para tener createdAt/updatedAt gratis.

const profesorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

//Antes de guardar lo hace hash
profesorSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

//Compara password contra hash guardado
profesorSchema.methods.compararPassword = function (passwordPlano) {
  return bcrypt.compare(passwordPlano, this.password);
};

//Eliminamos la password del objeto JSON que da la respuesta
profesorSchema.methods.toJSON = function () {
  const profesor = this.toObject();
  delete profesor.password;
  return profesor;
};

export const Profesor = mongoose.model(
  "Profesor",
  profesorSchema,
  "profesores",
);
