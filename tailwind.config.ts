import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { forest:'#183D2D', moss:'#496B42', cream:'#F7F3EA', honey:'#D99627', ink:'#16241D' }, fontFamily: { display:['Georgia','serif'] }, boxShadow: { soft:'0 18px 50px rgba(24,61,45,.10)' } } }, plugins: [] } satisfies Config;
