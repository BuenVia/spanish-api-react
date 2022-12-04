const documentation = [
    {
        id: 1,
        title: 'All TOPICS and VOCABS',
        url: '/api/vocab',
        content: "Returns all TOPICS and VOCABS\r\n\r\n*Example*\r\n\r\n```\r\n{\r\n        \"_id\": \"6369271a3480ccd1b0b5d957\",\r\n        \"topic\": \"Common Words\",\r\n        \"vocab\": [\r\n            {\r\n                \"esp\": \"abierto\",\r\n                \"eng\": \"open\"\r\n            },\r\n            {\r\n                \"esp\": \"cerrado\",\r\n                \"eng\": \"closed\"\r\n            }\r\n        ],\r\n        \"__v\": 0\r\n    },\r\n```",
    },
    {
        id: 2,
        title: 'All VOCABS of a specific TOPIC',
        url: '/api/topic/:topic',
        content: "returns all VOCABS of a specific TOPIC\r\n\r\n**note that the TOPIC must be in lower-case, and if more than one word it should be slugged: eg. common-words**\r\n\r\n*Example*\r\n`/api/topic/common-words`\r\n\r\n```\r\n{\r\n    \"_topic\": \"Common Words\",\r\n ,  \"count\": \"120\",\r\n    \"vocab\": [\r\n        {\r\n            \"esp\": \"completo\",\r\n            \"eng\": \"complete\"\r\n        },\r\n            {\r\n            \"esp\": \"abierto\",\r\n            \"eng\": \"open\"\r\n        }\r\n    ]\r\n}\r\n```\r\n\r\n"
    },
    {
        id: 3,
        title: 'A specific Spanish VOCAB',
        url: '/api/vocab/esp/:word',
        content: "returns a specific VOCAB based on the Spanish word in the object.\r\n\r\nThe :word element must be all lower case.\r\n\r\n*Example*\r\n`/api/vocab/esp/rojo`\r\n\r\n```\r\n{\r\n        \"_id\": \"636cee7ae199a0bb8577abe4\",\r\n        \"topic\": \"Colors\",\r\n        \"eng\": \"red\",\r\n        \"esp\": \"rojo\",\r\n        \"createdAt\": \"2022-11-10T12:28:42.623Z\",\r\n        \"__v\": 0\r\n    }\r\n```\r\n\r\n",
    },
    {
        id: 4,
        title: 'A specific English VOCAB',
        url: '/api/vocab/eng/:word',
        content: "returns a specific VOCAB based on the English word in the object.\r\n\r\nThe :word element must be all lower case.\r\n\r\n*Example* `/api/vocab/eng/red`\r\n\r\n```\r\n{\r\n        \"_id\": \"636cee7ae199a0bb8577abe4\",\r\n        \"topic\": \"Colors\",\r\n        \"eng\": \"red\",\r\n        \"esp\": \"rojo\",\r\n        \"createdAt\": \"2022-11-10T12:28:42.623Z\",\r\n        \"__v\": 0\r\n    }\r\n```\r\n\r\n",
    }
]

export default documentation