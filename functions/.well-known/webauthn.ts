export const onRequestGet: PagesFunction = () => {
  return new Response(
    JSON.stringify(
      {
        origins: [
          "https://keytr.org",
          "https://nostkey.org",
          "https://bies.sovit.xyz",
          "https://gitvid.sovit.xyz",
          "https://nostrbook.net",
          "https://sovit.xyz",
        ],
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};
