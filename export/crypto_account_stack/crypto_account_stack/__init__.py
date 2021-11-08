import os

import streamlit.components.v1 as components
import streamlit as st


_RELEASE = True

if _RELEASE:
    root_dir  = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _crypto_account_stack = components.declare_component(
        "crypto_account_stack",
        path=build_dir,
    )

else:
    _crypto_account_stack = components.declare_component(
        "crypto-account-stack",
        url="http://localhost:3001",
    )


def crypto_account_stack(
    header_str: str,
    address_str_val: str,
    address_str_hdr: str,
    balance_str_val: str,
    balance_str_unit: str,
    balance_str_hdr: str,
    copy_str: str,
    href: str,
    key=None,
    font_size="12px",
    font_weight="none",
    width="100%",
    color="#122221",
    padding="0px",
    margin="0px",
    text_align="center",
    background="none",
):

    if not copy_str:
        copy_str = str

    return _crypto_account_stack(
        header_str=header_str,
        address_str_val=address_str_val,
        address_str_hdr=address_str_hdr,
        balance_str_val=balance_str_val,
        balance_str_unit=balance_str_unit,
        balance_str_hdr=balance_str_hdr,
        copy_str=copy_str,
        href=href,
        key=key,
        font_size=font_size,
        font_weight=font_weight,
        width=width,
        color=color,
        padding=padding,
        margin=margin,
        text_align=text_align,
        background=background,
    )


if not _RELEASE:
    st.title("Crypto Content Stack")

    style_kwargs = dict(
        font_size="14px",
        width="100%",
        padding="0px",
        margin="0 auto",
        text_align="center",
        background="none"
    )

    with st.sidebar:
        _crypto_account_stack(
            header_str="Client",
            address_str_val="0x123456789123456789",
            address_str_hdr="Address:",
            balance_str_val="99.99",
            balance_str_unit="BTC",
            balance_str_hdr="Balance: ",
            copy_str="You just successfully copied the string!",
            href="https://www.google.com/",
            **style_kwargs,
        )

