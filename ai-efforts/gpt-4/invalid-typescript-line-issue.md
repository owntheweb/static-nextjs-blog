## API request: https://api.openai.com/v1/chat/completions

Why is this line of TypeScript invalid? How do I fix it?\n\n

const firstImage: string = openGraphData?.images?[0] ?? `${BASE_URL}/images/ai-me.jpg`;

Error:
```
':' expected.ts(1005)

```
{
  "model": "gpt-4",
  "messages": [
      {
          "role": "assistant",
          "content": "web developer"
      },
      {
          "role": "user",
          "content": "Why is this line of TypeScript invalid? How do I fix it?\\n\\n\r\n\r\nconst firstImage: string = openGraphData?.images?[0] ?? `${BASE_URL}\/images\/ai-me.jpg`;\r\n\r\nError:\r\n```\r\n':' expected.ts(1005)"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

The problem is with the optional chaining operator (`?.`) before the array index access. You should not use `?` before array brackets.

You can fix it by changing the line to:

```typescript
const firstImage: string = (openGraphData?.images)?.[0] ?? `${BASE_URL}/images/ai-me.jpg`;
```

Now, the optional chaining operator is applied to the `openGraphData?.images`, and if it is not undefined or null, the array index access is done using `.[]`.

## Personal Thoughts

It works and helped keep things going!