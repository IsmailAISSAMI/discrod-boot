/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import styled from 'styled-components';


export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="Discord bot logo" width={65} height={65} />
      <Brand>WhiteLister</Brand>  
    </Link>
  );
}

const Brand = styled.span`
  font-family: 'DM Sans',sans-serif;
  color: white;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 8px;
  letter-spacing: 1px;
`;
