import styled from 'styled-components';

export const Container = styled.div`
    .container {
        width: min(90vw, 800px);
        margin: auto;
    }

    h2 {
        margin-top: 3.2rem;
        margin-bottom: 0.8rem;
        color: var(--dark-blue);
        font-weight: 400;
    }

    header {
        background: #2d4a22;
        padding: 2rem 0 10rem;
        text-align: center;
    }

    #logo {
        color: #fff;
        font-weight: 100;
    }

    #balance {
        margin-top: -8rem;

        h2 {
            color: white;
            margin-top: 0;
        }
    }

    .card {
        background: white;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        margin-bottom: 2rem;
        color: var(--dark-blue);

        h3 {
            font-weight: normal;
            font-size: 1rem;
        }

        p {
            font-size: 2rem;
            line-height: 3rem;
            margin-top: 1rem;
        }
    }

    .total {
        background: #49AA26;
        color: white;
    }

    table thead tr th:first-child, table tbody tr td:first-child {
        border-radius: 0.25em 0 0 0.25rem;
    }

    #data-table {
        width: 100%;
        border-spacing: 0 0.5rem;
        color: #969cb3;
    }

    table {
        tbody{
            td {
                background: white;
                padding: 1rem 2rem;
            }

            .description {
                    color: var(--dark-blue);
                }

                .income {
                    color: #12a454;
                }

                .expense {
                    color: #e92929;
                }

            tr {
            opacity: 0.7;
                &:hover {
                    opacity: 1;
                }
            }
        }

        th {
            background: white;
            font-weight: normal;
            padding: 1rem 2rem;
            text-align: left;
        }
    }

    footer {
        text-align: center;
        padding: 4rem 0 2rem;
        color: var(--dark-blue);

        opacity: 0.6;
    }
`;