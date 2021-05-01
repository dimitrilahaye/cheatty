db.createUser({
  user: "dimitri-user",
  pwd: "example",
  roles: [
    {
      role: "dbOwner",
      db: "cheatty",
    },
  ],
});
