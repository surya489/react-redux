import React, { useState } from 'react';
import './CSSConcepts.css';

const CSSConcepts = () => {
    const [activeTab, setActiveTab] = useState('flexbox');

    return (
        <div className="css-concepts-container">
            <div className="card mt-4">
                <div className="card-body">
                    <h4 className="card-title mb-4">📐 Understanding CSS Layout: Flexbox & Grid</h4>
                    
                    {/* Navigation Tabs */}
                    <ul className="nav nav-tabs mb-4" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'flexbox' ? 'active' : ''}`}
                                onClick={() => setActiveTab('flexbox')}
                            >
                                Flexbox 📏
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'grid' ? 'active' : ''}`}
                                onClick={() => setActiveTab('grid')}
                            >
                                Grid 🗂️
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'comparison' ? 'active' : ''}`}
                                onClick={() => setActiveTab('comparison')}
                            >
                                Comparison 🤔
                            </button>
                        </li>
                    </ul>

                    {/* Flexbox Section */}
                    {activeTab === 'flexbox' && (
                        <div className="tab-content">
                            <h5 className="mb-3">🎯 What is Flexbox?</h5>
                            <p className="mb-3 text-muted">
                                <strong>Think of Flexbox like arranging books on a shelf:</strong><br/>
                                You have a shelf (container) and books (items). You can arrange them in a line, decide how much space between them, 
                                and make them all the same height. Flexbox works in ONE dimension - either a row or a column.
                            </p>

                            {/* Simple Real-World Example */}
                            <div className="mb-4">
                                <h6 className="mb-2">📚 Real-World Example:</h6>
                                <p className="text-muted small">A navigation bar at the top of a website with menu items spread across</p>
                                <div className="flexbox-example-1">
                                    <div className="flex-item">Home</div>
                                    <div className="flex-item">About</div>
                                    <div className="flex-item">Services</div>
                                    <div className="flex-item">Contact</div>
                                </div>
                            </div>

                            {/* Key Concepts */}
                            <h6 className="mb-2">🔑 Key Concepts:</h6>
                            <div className="alert alert-info">
                                <strong>Direction:</strong>
                                <p className="mb-0">Items can be arranged left-to-right (row) or top-to-bottom (column)</p>
                            </div>

                            {/* Row Example */}
                            <div className="mb-4">
                                <p className="small text-muted mb-2">Items in a ROW (left to right):</p>
                                <div className="flexbox-row">
                                    <div className="flex-box">1</div>
                                    <div className="flex-box">2</div>
                                    <div className="flex-box">3</div>
                                </div>
                            </div>

                            {/* Column Example */}
                            <div className="mb-4">
                                <p className="small text-muted mb-2">Items in a COLUMN (top to bottom):</p>
                                <div className="flexbox-column">
                                    <div className="flex-box">1</div>
                                    <div className="flex-box">2</div>
                                    <div className="flex-box">3</div>
                                </div>
                            </div>

                            {/* Spacing Examples */}
                            <div className="alert alert-warning">
                                <strong>🎨 Spacing Concepts:</strong>
                                <p className="mb-2"><strong>Space Between:</strong> Items spread out with space between them</p>
                                <div className="flexbox-space-between mb-3">
                                    <div className="flex-box-small">A</div>
                                    <div className="flex-box-small">B</div>
                                    <div className="flex-box-small">C</div>
                                </div>

                                <p className="mb-2"><strong>Space Around:</strong> Items have equal space on all sides</p>
                                <div className="flexbox-space-around">
                                    <div className="flex-box-small">A</div>
                                    <div className="flex-box-small">B</div>
                                    <div className="flex-box-small">C</div>
                                </div>

                                <p className="mb-0"><strong>Space Evenly:</strong> Items divide space equally</p>
                                <div className="flexbox-space-evenly">
                                    <div className="flex-box-small">A</div>
                                    <div className="flex-box-small">B</div>
                                    <div className="flex-box-small">C</div>
                                </div>
                            </div>

                            {/* Alignment */}
                            <div className="alert alert-success">
                                <strong>✅ Alignment:</strong>
                                <p className="mb-2">You can align items to the top, center, or bottom</p>
                                <p className="small text-muted">Centered items:</p>
                                <div className="flexbox-center">
                                    <div className="flex-box-small">Centered</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Grid Section */}
                    {activeTab === 'grid' && (
                        <div className="tab-content">
                            <h5 className="mb-3">🎯 What is Grid?</h5>
                            <p className="mb-3 text-muted">
                                <strong>Think of Grid like a chessboard or a spreadsheet:</strong><br/>
                                You have rows and columns. Items can be placed in specific positions - like placing pieces on a board. 
                                Grid works in TWO dimensions - both rows AND columns at the same time.
                            </p>

                            {/* Simple Real-World Example */}
                            <div className="mb-4">
                                <h6 className="mb-2">🏠 Real-World Example:</h6>
                                <p className="text-muted small">A photo gallery arranged in rows and columns</p>
                                <div className="grid-example">
                                    <div className="grid-item">Photo 1</div>
                                    <div className="grid-item">Photo 2</div>
                                    <div className="grid-item">Photo 3</div>
                                    <div className="grid-item">Photo 4</div>
                                    <div className="grid-item">Photo 5</div>
                                    <div className="grid-item">Photo 6</div>
                                </div>
                            </div>

                            {/* Key Concepts */}
                            <h6 className="mb-2">🔑 Key Concepts:</h6>
                            <div className="alert alert-info">
                                <strong>Rows & Columns:</strong>
                                <p className="mb-0">Grid creates a structure with both horizontal rows and vertical columns</p>
                            </div>

                            {/* Simple Grid */}
                            <div className="mb-4">
                                <p className="small text-muted mb-2">Simple 3-column Grid:</p>
                                <div className="grid-3-col">
                                    <div className="grid-box">A</div>
                                    <div className="grid-box">B</div>
                                    <div className="grid-box">C</div>
                                    <div className="grid-box">D</div>
                                    <div className="grid-box">E</div>
                                    <div className="grid-box">F</div>
                                </div>
                            </div>

                            {/* Different Column Sizes */}
                            <div className="alert alert-warning">
                                <strong>🎨 Advanced Layout:</strong>
                                <p className="small text-muted mb-2">1 large column + 2 small columns:</p>
                                <div className="grid-complex">
                                    <div className="grid-box-large">Large Area</div>
                                    <div className="grid-box">Small 1</div>
                                    <div className="grid-box">Small 2</div>
                                    <div className="grid-box">Small 3</div>
                                    <div className="grid-box">Small 4</div>
                                </div>
                            </div>

                            {/* Gaps */}
                            <div className="alert alert-success">
                                <strong>✅ Spacing Between Items:</strong>
                                <p className="small text-muted mb-2">Grid items with gaps (space) between them:</p>
                                <div className="grid-with-gap">
                                    <div className="grid-box">1</div>
                                    <div className="grid-box">2</div>
                                    <div className="grid-box">3</div>
                                    <div className="grid-box">4</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Comparison Section */}
                    {activeTab === 'comparison' && (
                        <div className="tab-content">
                            <h5 className="mb-4">⚖️ Flexbox vs Grid</h5>

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Flexbox</th>
                                            <th>Grid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Dimensions</strong></td>
                                            <td>1D (rows OR columns)</td>
                                            <td>2D (rows AND columns)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Navigation bars, toolbars, single line layouts</td>
                                            <td>Page layouts, galleries, dashboards</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Complexity</strong></td>
                                            <td>Simpler to use</td>
                                            <td>More powerful but slightly complex</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Item Placement</strong></td>
                                            <td>Items flow automatically</td>
                                            <td>Precise control over placement</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Example</strong></td>
                                            <td>Menu items in a row</td>
                                            <td>Dashboard with widgets in different positions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* When to Use */}
                            <div className="mt-4">
                                <div className="alert alert-info mb-3">
                                    <h6>✅ Use FLEXBOX when:</h6>
                                    <ul className="mb-0">
                                        <li>Items are in a single line (row or column)</li>
                                        <li>You want flexible spacing between items</li>
                                        <li>Building navigation bars or toolbars</li>
                                        <li>Creating a mobile menu</li>
                                    </ul>
                                </div>

                                <div className="alert alert-success">
                                    <h6>✅ Use GRID when:</h6>
                                    <ul className="mb-0">
                                        <li>You need both rows and columns</li>
                                        <li>Creating complex layouts with multiple sections</li>
                                        <li>Building dashboards or galleries</li>
                                        <li>Items have specific positions and sizes</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Combined Example */}
                            <div className="alert alert-warning mt-4">
                                <h6>🎨 Real Website Layout (Using Both):</h6>
                                <p className="small text-muted mb-3">A website often uses Grid for overall layout and Flexbox inside sections</p>
                                <div className="website-layout">
                                    {/* Header */}
                                    <div className="layout-header">
                                        <div style={{ flex: 1 }}>Logo</div>
                                        <div className="layout-nav">
                                            <span className="nav-item">Home</span>
                                            <span className="nav-item">About</span>
                                            <span className="nav-item">Contact</span>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="layout-content">
                                        <div className="layout-sidebar">Sidebar</div>
                                        <div className="layout-main">
                                            <div className="layout-box">Content Area 1</div>
                                            <div className="layout-box">Content Area 2</div>
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="layout-footer">Footer</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CSSConcepts;
