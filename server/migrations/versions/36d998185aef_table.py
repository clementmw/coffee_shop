"""table

Revision ID: 36d998185aef
Revises: 
Create Date: 2024-02-16 13:15:23.783221

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '36d998185aef'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('coffees',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('coffee_name', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('contacts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('message', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('customer_name', sa.String(), nullable=True),
    sa.Column('review', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('purchases',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('coffee_id', sa.Integer(), nullable=True),
    sa.Column('quantity_purchased', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['coffee_id'], ['coffees.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('purchases')
    op.drop_table('reviews')
    op.drop_table('contacts')
    op.drop_table('coffees')
    # ### end Alembic commands ###
