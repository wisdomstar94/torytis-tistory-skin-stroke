export function CallJavascript(props: { code: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<script>${props.code}</script>`
      }}
      />
  );
}