import comparePdf from '../src/compare.pdf';

test(`Compare non equal PDF files with excluded areas`, async () => {
    const compareResult: boolean = await comparePdf('./test-data/pdf1.pdf', './test-data/pdf2.pdf', {
        excludedAreas: [
            {
                pageNumber: 0,
                excludedAreas: [
                    {
                        x1: 700,
                        y1: 375,
                        x2: 790,
                        y2: 400,
                    },
                    {
                        x1: 875,
                        y1: 455,
                        x2: 955,
                        y2: 485,
                    },
                ],
            },
            {
                pageNumber: 1,
                excludedAreas: [
                    {
                        x1: 680,
                        y1: 240,
                        x2: 955,
                        y2: 465,
                    },
                ],
            },
        ],
    });

    expect(compareResult).toBeTruthy();
});
